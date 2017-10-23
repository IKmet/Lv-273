﻿// <auto-generated />
using EPA.DB.MSSQL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace EPA.DB.Migrations
{
    [DbContext(typeof(EpaContext))]
    [Migration("20171019134300_TestMigrationN")]
    partial class TestMigrationN
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EPA.DB.MSSQL.Models.Date", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateValue");

                    b.HasKey("Id");

                    b.ToTable("Dates");
                });

            modelBuilder.Entity("EPA.DB.MSSQL.Models.TestDetailedInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ApproximatedTime");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("QuestionsCount");

                    b.HasKey("Id");

                    b.ToTable("Tests");
                });
#pragma warning restore 612, 618
        }
    }
}
