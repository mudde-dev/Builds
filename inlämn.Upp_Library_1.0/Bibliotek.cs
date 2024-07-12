    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using System.Text;
    using System.Threading.Tasks;
    using static inlämn.Upp_Library_1._0.Bibliotek;
    using static System.Reflection.Metadata.BlobBuilder;

    namespace inlämn.Upp_Library_1._0
    {

        public class Bibliotek
        {/// <summary>
        /// förbättringar: 1). skulle vilja komma på ett sätt att kunns uppdatera tillgängliga böcker listan medans programmet körs och inte att programmet 
        /// måste avslutas först för att ändringarna ska visas i den tillagda listan av böcker
        /// </summary>
            
            //mina listor över låntagare och böcker
             List<Låntagare> Borrowers = new List<Låntagare>();
             List<Bok> Böcker = new List<Bok>();

            //Filepath till de båda json filerna, böcker och låntagare
            static string filePath = "böcker.json";
            static string filepath2 = "låntagare.json";

            //Lägga till nya låntagare
            public void LäggTillNyLåntag()
            {
                Console.WriteLine("Ange låntagaren namn:");
                string? namn = Console.ReadLine();

                Console.WriteLine("Ange personnummer i formatet ÅÅÅÅ/mm/dd:");
                string? personmummer = Console.ReadLine();

                Borrowers.Add(new Låntagare { Namn = namn, Personnummer = personmummer});

                Console.WriteLine("Låntagaren har lagts till.");
            }
            
            //Ladda låntagare från fil
            public void LaddaLåntagFrånFil()
            {
                if (File.Exists(filepath2))
                {
                    string jsonContent = File.ReadAllText(filepath2);
                    Borrowers = JsonConvert.DeserializeObject<List<Låntagare>>(jsonContent) ?? new List<Låntagare>();
                }
            }
            
            //Spara långtagare till fil
            public void SparaLåntagTillFil()
            {
                string jsonContent = JsonConvert.SerializeObject(Borrowers, Formatting.Indented);
                File.WriteAllText(filepath2, jsonContent);
            }

            //Lägga till ny bok
            public void LäggTillNyBok()
            {
                Console.WriteLine("Ange bokens titel:");
                string titel = Console.ReadLine();
                Console.WriteLine("Ange författaren:");
                string författare = Console.ReadLine();

                Böcker.Add(new Bok { Titel = titel, Författare = författare,  Utlånad = false });

                Console.WriteLine("Boken har lagts till.");
            }

        public bool TabortBok(string titel)
        {
            //Kontrollerar om Titeln Är Tom eller Enbart Består av Mellanslag
            if (string.IsNullOrWhiteSpace(titel))
            {
                Console.WriteLine("Titeln kan inte vara tom.");
                return false;
            }

            //Söker efter Boken
            var bok = Böcker.FirstOrDefault(b => b.Titel.Equals(titel, StringComparison.OrdinalIgnoreCase));

            //Kontrollerar om Boken Finns
            if (bok == null)
            {
                Console.WriteLine("Boken hittades inte.");
                return false;
            }

            //Tar Bort Boken och Bekräftar
            Böcker.Remove(bok);
            Console.WriteLine($"Boken '{titel}' har tagits bort.");
            return true;
        }


        //uppdatera bokstatus
        public void UppdateraBokStatus()
            {
                Console.WriteLine("Ange titeln på boken vars status du vill uppdatera:");
                string titel = Console.ReadLine();

                //Söker efter Boken
                var book = Böcker.FirstOrDefault(b => b.Titel.Equals(titel, StringComparison.OrdinalIgnoreCase));
                if (book != null)
                {
                    //Kontrollerar om Boken Finns och Uppdaterar Status
                    book.Utlånad = !book.Utlånad;
                    Console.WriteLine($"Bokens status har uppdaterats: {(book.Utlånad ? "utlånad" : "ej utlånad")}");
                }
                else
                {
                //Hanterar Fall Där Boken Inte Hittas
                Console.WriteLine("Boken hittades inte.");
                }
            }
       
      
            //spara tillagda böcker till fil
            public void SparaBöckerTillFil()
            {
            // Serialisera listan av böcker till en JSON-sträng
            string jsonContent = JsonConvert.SerializeObject(Böcker, Formatting.Indented);
            File.WriteAllText(filePath, jsonContent);

            /* using (StreamWriter file = new StreamWriter(filePath, false)) 
             {
                 file.Write(jsonContent);
             }*/ ///<summary>
            //ville experimentera och se om jag kunde få filen att stängas så
            //att de nya böckerna skulle kunna sparas med using, men det funkade inte!</summary>


        }


        //Ladda bok från fil
        public void LaddaBokFrånFil()
            {
                if (File.Exists(filePath))
                {
                    string jsonContent = File.ReadAllText(filePath);
                    Böcker = JsonConvert.DeserializeObject<List<Bok>>(jsonContent) ?? new List<Bok>();
                }
            }

            //Låna ut bok
            public void LånaUtBok()
            {
                Console.WriteLine("Ange namnet på låntagaren:");
                string låntagareNamn = Console.ReadLine();

                var låntagare = Borrowers.FirstOrDefault(l => l.Namn.Equals(låntagareNamn, StringComparison.OrdinalIgnoreCase));
                if (låntagare == null)
                {
                    Console.WriteLine("Låntagaren finns inte i systemet.");
                    return;
                }

                Console.WriteLine("Ange titeln på boken du vill låna:");
                string titel = Console.ReadLine();

                var bok = Böcker.FirstOrDefault(b => b.Titel.Equals(titel, StringComparison.OrdinalIgnoreCase));
                if (bok != null && !bok.Utlånad)
                {
                    bok.Utlånad = true;
                    bok.LånadAv = låntagareNamn; // Sätt namnet på låntagaren
                    Console.WriteLine($"{titel} har lånats ut till {låntagareNamn}.");
                }
                else
                {
                    Console.WriteLine("Boken är inte tillgänglig eller finns inte.");
                }

                // Spara ändringarna
                SparaBöckerTillFil();
            }

        //metod för återlämning av bok
        public void ÅterämnaBok(string titel)
        {
            var bok = Böcker.FirstOrDefault(b => b.Titel.Equals(titel, StringComparison.OrdinalIgnoreCase));
            if (bok != null)
            {
                if (bok.Utlånad)
                {
                    bok.Utlånad = false;
                    bok.LånadAv = null; // Nollställ vem som lånat boken
                    Console.WriteLine($"Boken '{titel}' har återlämnats.");
                    SparaBöckerTillFil(); // Spara ändringarna till filen
                }
                else
                {
                    Console.WriteLine("Boken är redan återlämnad.");
                }
            }
            else
            {
                Console.WriteLine("Boken hittades inte.");
            }
        }


        //visa låntagare och deras böcker
        public void VisaLåntagareOchDerasBöcker()
            {
                foreach (var låntagare in Borrowers)
                {
                    Console.WriteLine($"Namn: {låntagare.Namn} -- {låntagare.Personnummer}");
                    var lånadeBöcker = Böcker.Where(b => b.LånadAv == låntagare.Namn);
                    foreach (var bok in lånadeBöcker)
                    {
                        Console.WriteLine($"\tLånad Bok: {bok.Titel}");
                    }
                }
            }
     


    }
}
