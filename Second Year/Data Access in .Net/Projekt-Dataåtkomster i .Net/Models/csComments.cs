using System.ComponentModel.DataAnnotations;
using Configuration;
using Seido.Utilities.SeedGenerator;

namespace Models;



public class csComments : ISeed<csComments>, IComments
{

    public virtual Guid CommentId { get; set; }
    public virtual IUser User { get; set; }
    public virtual string Comments { get; set; }
    
    public virtual List<ISight> Sights { get; set; }

    public virtual DateTime? Date { get; set; } = null;
    public virtual bool Seeded { get; set; } = false;
    

    #region constructors
    public csComments() { }

    public csComments(csSeededQuote goodComment)
    {
        CommentId = Guid.NewGuid();
        Comments = goodComment.Quote;
        Seeded = true;
    }

    #endregion
    public virtual csComments Seed(csSeedGenerator sgen)
    {
        Seeded = true;
        CommentId = Guid.NewGuid();
        Comments = sgen.LatinSentence;
        Date = sgen.DateAndTime(1984, 2013);


        return this;
    }
}