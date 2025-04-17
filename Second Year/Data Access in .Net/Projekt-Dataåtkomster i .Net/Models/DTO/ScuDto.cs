using System;
using System.Diagnostics.Metrics;
using System.Reflection.Emit;
using System.Xml.Linq;

namespace Models.DTO
{
    public class csSightCUdto
    {
        public virtual Guid? SightId { get; set; }
        public virtual string Name { get; set; }
        public virtual enCategory category { get; set; }
        public virtual List<Guid> CityId { get; set; } = null;
        public virtual Guid? CountryId { get; set; } = null;
        public virtual List<Guid> CommentsId { get; set; } = null;


        public csSightCUdto() { }
        public csSightCUdto(ISight org)
        {
            SightId = org.SightId;
            Name = org.Name;
            category = org.Category;
            CountryId = org.Country.CountryId;

            CityId = org.City?.Select(i => i.CityId).ToList();

            CommentsId = org.Comments?.Select(i => i.CommentId).ToList();
        }
    }


    public class csCommentCUdto
    {
        public virtual Guid? CommentId { get; set; }
        public virtual string Comments { get; set; }
        public virtual Guid? UserId { get; set; } = null;
        public virtual DateTime? Date { get; set; } = null;

        public csCommentCUdto() { }

        public csCommentCUdto(IComments org)
        {
            CommentId = org.CommentId;

            Comments = org.Comments;

            UserId = org.User.UserId;

        }
    }

    public class csCountryCUdto
    {
        public virtual Guid? CountryId { get; set; }

        public virtual string Name { get; set; }

        public virtual List<Guid> SightId { get; set; } = null;
        public virtual List<Guid> CityId { get; set; } = null;

        public csCountryCUdto() { }
        public csCountryCUdto(ICountry org)
        {
            CountryId = org.CountryId;
            Name = org.Name;

            SightId = org.Sights?.Select(i => i.SightId).ToList();
            CityId = org.City?.Select(i => i.CityId).ToList();
        }
    }

    public class csCityCUdto
    {
        //cannot be nullable as a Pets has to have an owner even when created
        public virtual Guid CountryId { get; set; }
        public virtual Guid? CityId { get; set; }

        public virtual string Name { get; set; }
        public virtual string Address { get; set; }

        public csCityCUdto() { }
        public csCityCUdto(ICity org)
        {
            CountryId = org.Country.CountryId;

            CityId = org.CityId;
            Name = org.Name;
            Address = org.Address;
        }
    }

}