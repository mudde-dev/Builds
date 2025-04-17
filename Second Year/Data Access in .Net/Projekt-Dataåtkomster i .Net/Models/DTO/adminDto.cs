using System;
namespace Models.DTO
{
    public class adminInfoDbDto
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
}

