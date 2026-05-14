
import "./Services.css";

function Services() {

    const serviceCategories = [

      {
      category: "Wash & Protection",
      items: [
        { 
          name: "Water-based Sealant", 
          desc: "Cost-effective protection that bonds with water to form a seal on all surfaces.", 
          duration: "3-4 Weeks", 
          prices: { S: "R250", M: "R280", L: "R350" } 
        },
        { 
          name: "Carnauba Wax", 
          desc: "Unparalleled deep, warm shine that enhances natural colors.", 
          duration: "12 Months", 
          prices: { S: "R500", M: "R500", L: "R500" } 
        },
        { 
          name: "Ceramic Spray Sealant", 
          desc: "Protection against tree sap, acid rain, and UV rays.", 
          duration: "4-6 Months", 
          prices: { S: "R450", M: "R450", L: "R450" } 
        },
        { 
          name: "Graphene Coating", 
          desc: "Superior protection against bird droppings and road tar.", 
          duration: "12 Months", 
          prices: { S: "R500", M: "R600", L: "R700" } 
        }
      ]
    },
    {
      category: "Interior Detail",
      items: [
        { 
          name: "Partial Interior", 
          desc: "Vacuuming, steaming, and deep cleanse on seats, carpets, and flooring only.", 
          prices: { S: "R650", M: "R750", L: "R850" } 
        },
        { 
          name: "Full Interior", 
          desc: "Deep cleanse of all inner parts including leather, vinyl, and air vents.", 
          prices: { S: "R1350", M: "R1650", L: "R1850" } 
        }
      ]
    },
    {
      category: "Machine Polishing",
      items: [
        { 
          name: "Glazing", 
          desc: "Fills small imperfections to provide a high-vivid shine.", 
          duration: "Short-term", 
          prices: { S: "R1000", M: "R1500", L: "R1800" } 
        },
        { 
          name: "Paint Enhancement", 
          desc: "Single-stage machine polish removing 50-60% of surface defects.", 
          prices: { S: "1850", M: "R2850", L: "3850" } 
        },
           { 
          name: "Paint Correction", 
          desc: "Multi-stage machine polish removing 90-95% of surface defects.", 
          prices: { S: "R3500", M: "R4500", L: "R5500" } 
        },
      ]
    }
  ];
    
    
return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">The Tall Detailer Services</h2>
        
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="category-group">
            <h3 className="category-title">{cat.category}</h3>
            <div className="services-grid">
              {cat.items.map((item, i) => (
                <div key={i} className="service-card">
                  <div className="card-header">
                    <h4>{item.name}</h4>
                    {item.duration && <span className="duration">{item.duration}</span>}
                  </div>
                  <p className="description">{item.desc}</p>
                  <div className="price-row">
                    <div className="price-tag"><span>S</span> {item.prices.S}</div>
                    <div className="price-tag"><span>M</span> {item.prices.M}</div>
                    <div className="price-tag"><span>L</span> {item.prices.L}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

 
  
}

export default Services;