using System;
using Configuration;

namespace Models.DTO
{
    public class gstusrEnvDto
    {
        public string appEnvironment => csAppConfig.ASPNETCOREEnvironment;
        public string dbConnection => csAppConfig.DbLoginDetails("sysadmin").DbConnection;
    }

    public class gstusrInfoDbDto
    {
        public int nrSeededSights { get; set; } = 0;
        public int nrUnseededSights { get; set; } = 0;

        public int nrSeededCountries { get; set; } = 0;
        public int nrUnseededCountries { get; set; } = 0;

        public int nrSeededCities { get; set; } = 0;
        public int nrUnseededCities { get; set; } = 0;

        public int nrSeededComments { get; set; } = 0;
        public int nrUnseededComments { get; set; } = 0;

        public int nrSeededUsers { get; set; } = 0;
        public int nrUnseededUsers { get; set; } = 0;
    }

    public class gstusrInfoSightsDto
    {
        public string Country { get; set; } = null;
        public string City { get; set; } = null;
        public int NrSights { get; set; } = 0;
    }

    /*     public class gstusrInfoPetsDto
        {
            public string Country { get; set; } = null;
            public string City { get; set; } = null;
            public int NrPets { get; set; } = 0;
        } */

    public class gstusrInfoCommentssDto
    {
        public string Author { get; set; } = null;
        public int NrQuotes { get; set; } = 0;
    }

    public class gstusrInfoAllDto
    {
        public gstusrEnvDto Environment { get; set; } = new gstusrEnvDto();
        public gstusrInfoDbDto Db { get; set; } = null;
        public List<gstusrInfoSightsDto> Friends { get; set; } = null;
        // public List<gstusrInfoPetsDto> Pets { get; set; } = null;
        public List<gstusrInfoCommentssDto> Quotes { get; set; } = null;
    }
}

