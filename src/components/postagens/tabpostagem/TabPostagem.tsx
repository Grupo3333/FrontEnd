import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import Contato from '../../../paginas/contato/Contato';
import SobreNos from '../../../paginas/Sobrenos/SobreNos';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Conheça o projeto" value="1"/>
            <Tab label="Conheça os desenvolvedores" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Contato />
          </Box>
        </TabPanel>
        <TabPanel value="2">
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            <SobreNos />
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;