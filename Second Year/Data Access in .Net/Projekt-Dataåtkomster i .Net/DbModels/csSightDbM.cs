using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Models;
using Seido.Utilities.SeedGenerator;
using Models.DTO;

namespace DbModels;

public class csSightDbM : csSights, ISeed<csSightDbM>
{

    [Key]
    public override Guid SightId { get; set; }




    [NotMapped]
    public override List<IComments> Comments { get => CommentDbM?.ToList<IComments>(); set => new NotImplementedException(); }

    [JsonIgnore]
    [Required]
    public List<csCommentsDbM> CommentDbM { get; set; }



    [NotMapped]
    public override List<ICity> City { get => CitiesDbM?.ToList<ICity>(); set => new NotImplementedException(); }

    [JsonIgnore]
    [Required]
    public virtual List<csCityDbM> CitiesDbM { get; set; } = null;

    [NotMapped]
    public override ICountry Country { get => CountryDbM; set => new NotImplementedException(); }

    [JsonIgnore]
    public virtual csCountryDbM CountryDbM { get; set; } = null;


        public virtual string strCategory
        {
            get => Category.ToString();
            set { }  //set is needed by EFC to include in the database, so I make it to do nothing
        } 

    public override csSightDbM Seed(csSeedGenerator _seeder)
    {
        base.Seed(_seeder);
        return this;
    }

        public csSightDbM UpdateFromDTO(csSightCUdto org)
    {
        Name = org.Name;
      

        return this;
    }
   

    #region constructors
    public csSightDbM() { }
    public csSightDbM(csSightCUdto org)
    {
        SightId = Guid.NewGuid();
        UpdateFromDTO(org);
    }
    #endregion
}