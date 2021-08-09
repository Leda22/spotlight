import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Aujourd'hui</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415 DZD</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cette Semaine</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,415 DZD</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ce Mois</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225 DZD</span>
        </div>
      </div>
    </div>
  );
}
