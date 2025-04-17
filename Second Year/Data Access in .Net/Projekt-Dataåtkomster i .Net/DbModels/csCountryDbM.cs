using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Models;
using Seido.Utilities.SeedGenerator;
using DbModels;
namespace Models.DTO;


public class csCountryDbM : csCountry, ISeed<csCountryDbM>, IEquatable<csCountryDbM>
{
    [Key]
    public override Guid CountryId { get; set; }

     [NotMapped]
    public override List<ICity> City { get => CitiesDbM?.ToList<ICity>(); set => new NotImplementedException(); }

    [JsonIgnore]
    [Required]
    public virtual List<csCityDbM> CitiesDbM { get; set; } = null;
   
    [NotMapped]
   public override List<ISight> Sights {get => SightsDbM?.ToList<ISight>(); set => new NotImplementedException(); }

   [JsonIgnore]
   public List<csSightDbM> SightsDbM {get; set;} = null;

    #region implementing IEquatable

        public bool Equals(csCountryDbM other) => (other != null) ?((Name) ==
            (other.Name)) :false;

        public override bool Equals(object obj) => Equals(obj as csCountryDbM);
        public override int GetHashCode() => (Name).GetHashCode();

        #endregion


            #region Update from DTO
        public csCountryDbM UpdateFromDTO(csCountryCUdto org)
        {
            if (org == null) return null;

            Name = org.Name;

            return this;
        }
        #endregion

          #region randomly seed this instance
        public override csCountryDbM Seed(csSeedGenerator sgen)
        {
            base.Seed(sgen);
            return this;
        }
        #endregion
     
   
}