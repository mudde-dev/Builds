using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Models;
using Seido.Utilities.SeedGenerator;
using DbModels;
using Models.DTO;


public class csCityDbM : csCity, ISeed<csCityDbM>
{
    [Key]
    public override Guid CityId { get; set; }

    [NotMapped]
    public override ICountry Country { get => CountryDbM; set => new NotImplementedException(); }

    [JsonIgnore]
    public virtual csCountryDbM CountryDbM { get; set; } = null;

    [NotMapped]
    public override List<ISight> Sights { get => SightsDbM?.ToList<ISight>(); set => new NotImplementedException(); }

    [JsonIgnore]
    [Required]
    public virtual List<csSightDbM> SightsDbM { get; set; } = null;

    public override csCityDbM Seed(csSeedGenerator _seeder)
    {
        base.Seed(_seeder);
        return this;
    }

    #region Update from DTO
    public csCityDbM UpdateFromDTO(csCityCUdto org)
    {
        if (org == null) return null;

        Name = org.Name;
        Address = org.Address;

        //We will set this when DbM model is finished
        //FriendId = org.FriendId;

        return this;
    }
    #endregion

    #region constructors
    public csCityDbM() { }
    public csCityDbM(csCityCUdto org)
    {
        CityId = Guid.NewGuid();
        UpdateFromDTO(org);
    }
    #endregion
}