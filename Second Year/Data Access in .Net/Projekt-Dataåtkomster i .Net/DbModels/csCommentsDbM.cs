using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Models;
using Models.DTO;

using Seido.Utilities.SeedGenerator;
using DbModels;


public class csCommentsDbM : csComments, ISeed<csCommentsDbM>, IEquatable<csCommentsDbM>
{
    [Key]
    public override Guid CommentId { get; set; }
    
    [NotMapped]
    public override IUser User {get => UserDbM; set=> new NotImplementedException();  }

   [JsonIgnore]
    public virtual csUserDbM UserDbM {get; set;} = null;

   [NotMapped]
   public override List<ISight> Sights {get => SightsDbM?.ToList<ISight>(); set => new NotImplementedException(); }

   [JsonIgnore]
   public List<csSightDbM> SightsDbM {get; set;} = null;

    #region constructors
    public csCommentsDbM() : base() { }
        public csCommentsDbM(csSeededQuote goodComment) : base(goodComment) { }
        public csCommentsDbM(csCommentCUdto org)
        {
            CommentId = Guid.NewGuid();
            UpdateFromDTO(org);
        }
        #endregion

        #region implementing IEquatable

        public bool Equals(csCommentsDbM other) => (other != null) ? ((Comments, Date) ==
            (other.Comments, other.Date)) : false;

        public override bool Equals(object obj) => Equals(obj as csCommentsDbM);

 

        #endregion
   public override csCommentsDbM Seed(csSeedGenerator _seeder)
    {
       base.Seed(_seeder);
       return this;
    }

#region Update from DTO
        public csComments UpdateFromDTO(csCommentCUdto org)
        {
            if (org == null) return null;

         Comments = org.Comments;

            return this;
        }
        #endregion

}