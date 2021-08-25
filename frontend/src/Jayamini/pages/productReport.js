import React from 'react';
import MUIDataTable from 'mui-datatables';
import Nav from "../components/Navbar"
import TopNav from "../components/topNav";
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
class AdvFilter extends React.Component {
  state = {
    columns: ['Product','Supplier', 'Category', 'Brand', 'Remaining Items', 'Profit Earned'],
    data: [
      ['Glamorous Blush','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 30, '10,000 LKR'],
      ['50 Red Roses','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 12, '20,000 LKR'],
      ['Eternal Rose','nifarooz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 20, '50,000 LKR'],
      ['Falling Spring','nbazaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 10, '100,000 LKR'],
      ['Love Blossoms','kilyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 50, '100,000 LKR'],
      ['Eternal Sunshine', 'niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 15, '100,000 LKR'],
      ['Beckham Homme', 'kiyaz889@kiyaz.lk', 'Perfume', 'David Beckham', 15, '100,000 LKR'],
      ['Beckham Signature','kiyaz889@kiyaz.lk', 'Perfume', 'David Beckham', 15, '100,000 LKR'],
      ['Klein Eternity','kiyaz889@kiyaz.lk', 'Perfume', 'Calvin Klein', 15, '100,000 LKR'],
      ['Hugo Boss Scent','kiyaz889@kiyaz.lk', 'Perfume', 'Hugo Boss', 15, '100,000 LKR'],
      ['RiRi Crush','kiyaz889@kiyaz.lk', 'Perfume', 'Rihanna', 15, '100,000 LKR'],
      ['Mens Watch IQ','kiyaz889@kiyaz.lk', 'Watches', 'Danish Design', 15, '100,000 LKR'],
      ['Women\'s Lyric','kiyaz889@kiyaz.lk', 'Watches', 'Fossil', 15, '100,000 LKR'],
      ['Apple SE Gold ','kiyaz889@kiyaz.lk', 'Watches', 'Apple', 15, '100,000 LKR'],
      ['Perry Pink Leather','kiyaz889@kiyaz.lk', 'Watches', 'Coach', 15, '100,000 LKR'],
      [' Blush Blossoms','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 30, '10,000 LKR'],
      ['Red Roses','niyaz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 12, '20,000 LKR'],
      ['U Sky Roses','nifarooz78@lassanaflora.lk', 'Flowers', 'Lassana flora', 20, '50,000 LKR']
    ]
  }
  render() {
    const { columns, data } = this.state;
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 10,
      page: 1
    };
    return (

      
      <div className="row bg-secondary bg-opacity-10">
            <div className="col col-lg-2"><Nav/></div>
            <div className="col mb-5 ">
              <TopNav/>
            <div className="m-5 ">
              <h3 align="center" ></h3>
                
              <MUIDataTable
                title="Gift Items Statistics Report"
                data={data}
                columns={columns}
                options={options}
            />
        
            </div>
            </div>
          </div>

    );
  }
}

export default AdvFilter;