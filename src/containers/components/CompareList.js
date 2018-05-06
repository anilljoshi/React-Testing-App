import React from "react";
import ReactDOM from "react-dom";
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const style={
  titleStyle:{
    padding:'8px 10px',
    color:'#117bf3'
  }
}

export default class CompareList extends React.Component{

  render(){
    const data = this.props.compareArr;
    return(
      <Dialog
          titleStyle={style.titleStyle}
          title="Comparision"
          modal={false}
          autoScrollBodyContent={true}
          open={this.props.open}
          onRequestClose={this.props.handleClick}
        >
        <table cellSpacing='0'>
                  <tbody>
                    <tr>
                      <th>Feature</th>
                      <th>{data[0].Name}</th>
                      <th>{data[1].Name}</th>
                    </tr>
                    <tr>
                      <td>Rank</td>
                      <td>{data[0].Rank}</td>
                      <td>{data[1].Rank}</td>
                    </tr>
                    <tr>
                      <td>Duration</td>
                      <td>{data[0].Duration}</td>
                      <td>{data[1].Duration}</td>
                    </tr>
                    <tr>
                      <td>Director</td>
                      <td>{data[0].Director}</td>
                      <td>{data[1].Director}</td>
                    </tr>
                     <tr>
                      <td>Genres</td>
                      <td>
                        {
                          data[0].Genres.map((row,index)=>{
                            return row+', '
                          })
                        }
                      </td>
                      <td>
                        {
                          data[1].Genres.map((row,index)=>{
                            return row+', '
                          })
                        }
                      </td>
                    </tr>

                    <tr>
                      <td>Actors</td>
                      <td>
                        {
                          data[0].Actors.map((row,index)=>{
                            return row+', '
                          })
                        }
                      </td>
                      <td>
                        {
                          data[1].Actors.map((row,index)=>{
                            return row+', '
                          })
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{data[0].Description}</td>
                      <td>{data[1].Description}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <RaisedButton
                          style={{marginTop:24}}
                          href="https://www.zocdoc.com/"
                          target="_blank"
                          label="Book Now"
                          secondary={true}
                          onClick={this.handleClick}
                        />
                      </td>
                      <td>
                        <RaisedButton
                          style={{marginTop:24}}
                          href="https://bookmyshow.com"
                          target="_blank"
                          label="Book Now"
                          secondary={true}
                          onClick={this.handleClick}
                        />
                      </td>
                    </tr>
                   
                  </tbody>
        </table>
      </Dialog>
    )
  }
}
