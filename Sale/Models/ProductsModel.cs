using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VpassSales.Models
{
    public class ProductsModel
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string ProductDetails { get; set; }
        public string ImageURL { get; set; }
        public string ProductPrice { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public string MininumOreder { get; set; }
    }
}