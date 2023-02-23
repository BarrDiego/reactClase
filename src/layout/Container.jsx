import React from 'react'

const Container = (props) => {
    const {fullWidth, breakpoint, children, dFlex} = props;

  return (
    <div className={`${fullWidth ? 'container-fluid' : 'container'} ${dFlex ? 'd-flex justify-content-between' : ''}`}>
        {/*children (palabra reservada) equivale a todos los componentes q metere en el futuro pueden ser todos los q quieran en el container*/}
        {children}
    </div>
  )
}

export default Container