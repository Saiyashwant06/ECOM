using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VpassSales.Models
{
    public class ProfileModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string ConactNumber { get; set; }
        public string FirmName { get; set; }
        public string Address { get; set; }
        public string TinNo { get; set; }
        public string PanNo { get; set; }
        public string BankIFSC { get; set; }
        public string BankAccNumber { get; set; }
    }
}