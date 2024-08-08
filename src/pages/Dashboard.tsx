import React from "react";
import "../styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "../styles/App.css"; // Örneğin, theme.css dosyanız bu yolda

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Hoşgeldiniz!</h2>
      <p>
        Bu, yönetim panelinizin ana sayfasıdır. Buradan tüm sistem metriklerine
        erişebilirsiniz.
      </p>
    </div>
  );
};

export default Dashboard;
