using System.ComponentModel.DataAnnotations;
using Configuration;
using Seido.Utilities.SeedGenerator;


namespace Models;

public enum enCategory { Themepark, Zoo, Café, Restaurant, Cinema, Arena }
public class csSights : ISeed<csSights>, ISight,  IEquatable<csSights>
{
  
    public virtual Guid SightId { get; set; }
    public virtual enCategory Category { get; set; }
    public string Name { get; set; }
    public virtual List<ICity> City { get; set; } = null;
    public virtual ICountry Country { get; set; } = null;
    public virtual List<IComments> Comments { get; set; } = null;



    //public virtual IAttraction Attraction { get; set; }


        #region implementing IEquatable

        public bool Equals(csSights other) => (other != null) ? ((Category, Name, City) ==
            (other.Category, other.Name, other.City)) : false;

        public override bool Equals(object obj) => Equals(obj as csSights);
        public override int GetHashCode() => (Category, Name, City).GetHashCode();

        #endregion

     #region constructors
        public csSights() { }
        public csSights(csSights org)
        {
            this.Seeded = org.Seeded;

            this.SightId = org.SightId;
            this.Category = org.Category;
            this.Name = org.Name;
            this.City = org.City;
        }
        #endregion


    #region seeder
    public bool Seeded { get; set; } = false;
   

    public virtual csSights Seed(csSeedGenerator _seeder)
    {

        Seeded = true;
        SightId = Guid.NewGuid();
        Category = _seeder.FromEnum<enCategory>();
        Name = _seeder.PetName;
        // Comments  = _seeder.LatinSentences(_seeder.Next(0,21));

        return this;
    }
    #endregion
}
