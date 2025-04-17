using Configuration;
using Seido.Utilities.SeedGenerator;
using System.ComponentModel.DataAnnotations;

namespace Models;

public class csCity : ISeed<csCity>, ICity

{
    [Key]

    public virtual Guid CityId { get; set; }
    public virtual string Name  { get; set; }
    public virtual string Address { get; set; }
    public virtual ICountry Country { get; set; }   = null;
    public virtual List<ISight> Sights { get; set; } = null;
    public bool Seeded { get; set; } = false;
    
#region constructors
        public csCity() { }
        public csCity(csCity org)
        {
            this.Seeded = org.Seeded;

            this.CityId = org.CityId;
            this.Name = org.Name;
            this.Address = org.Address;
        }
        #endregion

    public virtual csCity Seed(csSeedGenerator sgen)
    {
        Seeded = true;
        CityId = Guid.NewGuid();
        Name = sgen.FromString("Madagskar, Lisbon, port au prince, Zanzibar");
        Address = sgen.StreetAddress();


        return this;
    }
}