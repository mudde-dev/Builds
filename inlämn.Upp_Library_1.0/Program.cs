using System.Collections.Generic;
using static inlämn.Upp_Library_1._0.Bibliotek;
using Newtonsoft.Json;
using System;
using static System.Reflection.Metadata.BlobBuilder;
using System.Net.Http.Json;

namespace inlämn.Upp_Library_1._0
{
    internal class Program
    {
        
        static void Main(string[] args)
        {
            Console.Title = "Los Bibletekas";
            Console.WriteLine($"{Console.Title,50}");

            Bibliotek library = new Bibliotek();

            ///<summary>hade problem med att syncronisera min
            ///json böcker lista med den listan som nytillagda
            ///böcker spara i, som är samma lista. Väldigt konstigt</summary>
            //List<Bok> Böcker = new List<Bok>();


            Bok bok1 = new Bok();
            Låntagare låntagare1 = new Låntagare();

          


            string filePath = "böcker.json";
            string filepath2 = "låntagare.json";

            // Läs in hela JSON-filen som en sträng.
            string json = File.ReadAllText(filePath);
            string json2 = File.ReadAllText(filepath2);

            // Deserialisera JSON-strängen till en lista av Bok-objekt.
            List<Bok> Böcker = JsonConvert.DeserializeObject<List<Bok>>(json);
            List<Låntagare> låntagare = JsonConvert.DeserializeObject<List<Låntagare>>(json2);

            library.LaddaBokFrånFil();
            library.LaddaLåntagFrånFil();

         


            string menuChoice = "0";

            while (menuChoice != "3")
            {

                Console.WriteLine("\nHär är menyn: Gör ett val\n");

                Console.WriteLine("1. Lägga till nya böcker i biblioteket");
                Console.WriteLine("2. Låna Bok");
                Console.WriteLine("3. Återlämna bok");
                Console.WriteLine("4. Visa tillgängliga böcker");
                Console.WriteLine("5. Visa Låntagare");
                Console.WriteLine("6. Visa låntagare och deras lånade böcker");
                Console.WriteLine("7. Lägg till låntagare");
                Console.WriteLine("8. Uppdatera Boks lånestatus");
                Console.WriteLine("9. Ta bort en Bok");
                Console.WriteLine("0. Avsluta Programmet");






                menuChoice = Console.ReadLine();

                Console.WriteLine();

                switch (menuChoice)
                {
                    case "1":


                        library.LäggTillNyBok();

                        library.SparaBöckerTillFil();

                        break;

                    case "2":

                        library.LånaUtBok();

                        break;

                    case "3":
                        Console.WriteLine("Ange titeln på boken du vill återlämna:");
                        string title = Console.ReadLine();

                        library.ÅterämnaBok(title);
                        //library.SparaBöckerTillFil();


                        break;


                    case "4":

                        //lista av böcker som finns i biblioteket                    
                        foreach (var bok in Böcker)
                        {
                            library.LaddaBokFrånFil();
                            Console.WriteLine($"Författare: {bok.Författare}");
                            Console.WriteLine($"Titel: {bok.Titel}");
                            Console.WriteLine($"Utlånad: {(bok.Utlånad ? "Ja" : "Nej")}");
                            Console.WriteLine(new string('-', 20)); // Skapar en avdelare mellan böckerna                            

                        }

                        break;

                    case "5":

                        //lista av låntagare som finns i biblioteket
                        foreach (var borrower in låntagare)
                        {
                            Console.WriteLine($"Namn: {borrower.Namn}");
                            Console.WriteLine($"Personnummer: {borrower.Personnummer}");
                            Console.WriteLine(new string('-', 20)); // Skapar en avdelare mellan låntagarna
                        }
                        break;

                    case "6":
                        library.VisaLåntagareOchDerasBöcker();

                        break;

                    case "7":

                        library.LäggTillNyLåntag();
                        library.SparaLåntagTillFil();
                        break;

                    case "8":
                        //uppdatera en boks status från utlånad till tillgänglig
                        library.UppdateraBokStatus();
                        break;

                    case "9":
                        //Ta bort en bok
                        Console.WriteLine("Ange titeln på boken du vill ta bort:");
                        string tabortBok = Console.ReadLine();

                        bool borttagen = library.TabortBok(tabortBok);
                        if (borttagen)
                        {
                            library.SparaBöckerTillFil();
                        }
                        break;
                    case "0":
                        Console.WriteLine("Programmet avslutas.");
                        Console.WriteLine();
                        Environment.Exit(0);
                        break;
                    default: Console.WriteLine("Det valet finns inte i menyn");
                        break;
                } 
                    
                
            }

            




            library.SparaBöckerTillFil();
        }
    }
    
}