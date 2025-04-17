using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Models;
using Seido.Utilities.SeedGenerator;


public class csUserDbM : csUsers, ISeed<csUserDbM>
{
    [Key]
    [Required]
    public override Guid UserId { get; set; }

    [NotMapped]
    public override List<IComments> Comments { get => CommentDbM?.ToList<IComments>(); set => new NotImplementedException(); }

    [JsonIgnore]
    [Required]
    public List<csCommentsDbM> CommentDbM { get; set; } = null;
    public override csUserDbM Seed(csSeedGenerator _seeder)
    {
        base.Seed(_seeder);
        return this;
    }
}


