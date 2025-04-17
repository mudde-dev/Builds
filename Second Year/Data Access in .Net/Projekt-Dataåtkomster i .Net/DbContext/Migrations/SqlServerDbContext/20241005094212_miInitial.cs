using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DbContext.Migrations.SqlServerDbContext
{
    /// <inheritdoc />
    public partial class miInitial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    CountryId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Seeded = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.CountryId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Seeded = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "City",
                columns: table => new
                {
                    CityId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CountryDbMCountryId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Seeded = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.CityId);
                    table.ForeignKey(
                        name: "FK_City_Country_CountryDbMCountryId",
                        column: x => x.CountryDbMCountryId,
                        principalTable: "Country",
                        principalColumn: "CountryId");
                });

            migrationBuilder.CreateTable(
                name: "Sights",
                columns: table => new
                {
                    SightId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CountryDbMCountryId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    strCategory = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Category = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Seeded = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sights", x => x.SightId);
                    table.ForeignKey(
                        name: "FK_Sights_Country_CountryDbMCountryId",
                        column: x => x.CountryDbMCountryId,
                        principalTable: "Country",
                        principalColumn: "CountryId");
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CommentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserDbMUserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Comments = table.Column<string>(type: "nvarchar(200)", nullable: true),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Seeded = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.CommentId);
                    table.ForeignKey(
                        name: "FK_Comments_User_UserDbMUserId",
                        column: x => x.UserDbMUserId,
                        principalTable: "User",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "csCityDbMcsSightDbM",
                columns: table => new
                {
                    CitiesDbMCityId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SightsDbMSightId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_csCityDbMcsSightDbM", x => new { x.CitiesDbMCityId, x.SightsDbMSightId });
                    table.ForeignKey(
                        name: "FK_csCityDbMcsSightDbM_City_CitiesDbMCityId",
                        column: x => x.CitiesDbMCityId,
                        principalTable: "City",
                        principalColumn: "CityId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_csCityDbMcsSightDbM_Sights_SightsDbMSightId",
                        column: x => x.SightsDbMSightId,
                        principalTable: "Sights",
                        principalColumn: "SightId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "csCommentsDbMcsSightDbM",
                columns: table => new
                {
                    CommentDbMCommentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SightsDbMSightId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_csCommentsDbMcsSightDbM", x => new { x.CommentDbMCommentId, x.SightsDbMSightId });
                    table.ForeignKey(
                        name: "FK_csCommentsDbMcsSightDbM_Comments_CommentDbMCommentId",
                        column: x => x.CommentDbMCommentId,
                        principalTable: "Comments",
                        principalColumn: "CommentId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_csCommentsDbMcsSightDbM_Sights_SightsDbMSightId",
                        column: x => x.SightsDbMSightId,
                        principalTable: "Sights",
                        principalColumn: "SightId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_City_CountryDbMCountryId",
                table: "City",
                column: "CountryDbMCountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UserDbMUserId",
                table: "Comments",
                column: "UserDbMUserId");

            migrationBuilder.CreateIndex(
                name: "IX_csCityDbMcsSightDbM_SightsDbMSightId",
                table: "csCityDbMcsSightDbM",
                column: "SightsDbMSightId");

            migrationBuilder.CreateIndex(
                name: "IX_csCommentsDbMcsSightDbM_SightsDbMSightId",
                table: "csCommentsDbMcsSightDbM",
                column: "SightsDbMSightId");

            migrationBuilder.CreateIndex(
                name: "IX_Sights_CountryDbMCountryId",
                table: "Sights",
                column: "CountryDbMCountryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "csCityDbMcsSightDbM");

            migrationBuilder.DropTable(
                name: "csCommentsDbMcsSightDbM");

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "Sights");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Country");
        }
    }
}
