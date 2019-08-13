import React from "react";
import Header from "./Header";
import Card from "./Card";
import Grid from '@material-ui/core/Grid';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Card/>
              <Card/>
            </Grid>
            <Grid container spacing={3}>
              <Card/>
              <Card/>
            </Grid>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </div>
    );
  }
}
