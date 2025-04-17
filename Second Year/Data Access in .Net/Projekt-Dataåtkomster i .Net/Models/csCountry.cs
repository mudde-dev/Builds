using Configuration;
using Seido.Utilities.SeedGenerator;
using System.ComponentModel.DataAnnotations;

namespace Models;

public class csCountry :ISeed<csCountry>, ICountry
{
    public virtual Guid CountryId { get; set; }
    public virtual string Name { get; set; }
    public virtual List<ISight> Sights {get; set;} = null;
    public virtual List<ICity> City { get; set; } = null;
    public bool Seeded { get; set; } = false;
    
#region constructors
        public csCountry() { }
        public csCountry(csCountry org)
        {
            this.Seeded = org.Seeded;

            this.CountryId = org.CountryId;
            this.Name = org.Name;
          
        }
        #endregion
    public virtual csCountry Seed(csSeedGenerator sgen)
    {
        Seeded = true;
        CountryId = Guid.NewGuid();
        Name = sgen.FromString("Kenya, Saudia, Tokyo, Japan, Seattle");
    

        return this;
    }
}
