import React from 'react';

function App() {
  return (
    <div className="App">
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title has-text-centered">NapicuPC Numax's PC Setup</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Můj počítač</h1>
            <p>Počítač na programování, úpravu fotek, sledování videí a nenáročné hraní</p>
          </div>
        </div>

        <div className="container">
          <table className="table is-bordered is-striped is-narrow is-hoverable">
            <tbody>
              <tr>
                <th>Skříň</th>
                <td>Lenovo ThinkCenter - Přesný moden neznámý</td>
              </tr>
              <tr>
                <th>Základní deska</th>
                <td>
                  <a
                    href="https://www.czc.cz/asus-prime-h310m-r-r2-0-intel-h310/267438/produkt"
                    target="_blank"
                  >
                    ASUS PRIME H310M-R R2.0
                  </a>
                </td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>
                  <a href="https://www.czc.cz/intel-core-i5-9400f/252287/produkt" target="_blank">
                    Intel Core i5-9400F
                  </a>
                </td>
              </tr>
              <tr>
                <th>GPU</th>
                <td>
                  <a href="https://www.czc.cz/msi-geforce-gt-710-1gb/184691/produkt" target="_blank">
                    GeForce GT 710 1GB
                  </a>
                </td>
              </tr>
              <tr>
                <th>Zdroj</th>
                <td>
                  <a href="https://www.czc.cz/corsair-cv-series-cv550-550w/278817/produkt" target="_blank">
                    Corsair CV550 - 550W
                  </a>
                </td>
              </tr>
              <tr>
                <th>Chladič</th>
                <td>
                  <a href="https://www.czc.cz/silentiumpc-fera-5/315340/produkt" target="_blank">
                    SilentiumPC Fera 5
                  </a>
                </td>
              </tr>
              <tr>
                <th>RAM-1</th>
                <td>
                  <a href="https://www.czc.cz/hyperx-fury-black-8gb-ddr4-2400/189362/produkt" target="_blank">
                    HyperX 8GB DDR4 2400MHz CL15 FURY series
                  </a>
                </td>
              </tr>
              <tr>
                <th>RAM-2</th>
                <td>
                  <a
                    href="https://www.alza.cz/hyperx-8gb-ddr4-2400mhz-cl15-fury-white-series-d4827386.htm"
                    target="_blank"
                  >
                    HyperX 8GB DDR4 2400MHz CL15 Fury White Series
                  </a>
                </td>
              </tr>
              <tr>
                <th>Disk1</th>
                <td>
                  <a href="https://www.czc.cz/samsung-ssd-860-evo-2-5-250gb/229476/produkt" target="_blank">
                    Samsung 860 EVO 250GB
                  </a>
                </td>
              </tr>
              <tr>
                <th>Disk2</th>
                <td>
                  <a
                    href="https://www.czc.cz/samsung-spinpoint-f1-hd502ij-500gb/54322/produkt"
                    target="_blank"
                  >
                    Samsung HD502IJ 500GB
                  </a>
                </td>
              </tr>
              <tr>
                <th>Ventilátory</th>
                <td>
                  <a href="https://www.czc.cz/arctic-f9-pwm-pst-black-92mm/312721/produkt" target="_blank">
                    2x Arctic F9 PWM PST Black, 92mm
                  </a>
                </td>
              </tr>
              <tr>
                <th>Operační systém</th>
                <td>
                  <a
                    href="https://www.czc.cz/microsoft-windows-10-pro-cz-64bit-dvd-oem/175668/produkt"
                    target="_blank"
                  >
                    Microsoft Windows 10 Pro 64bit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;
