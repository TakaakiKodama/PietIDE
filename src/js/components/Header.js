import React from "react";
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
  root:{
    background: '#000',
  },
  title:{
    color:'#FFF',
  }
});

export default function ClassesNesting() {
  const classes = useStyles();
  return (
    <CardHeader
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        title: classes.title, // class name, e.g. `classes-nesting-label-x`
      }}
      title="PietIDE"
    />
  );
}
