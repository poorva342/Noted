
import React,{useContext, useEffect} from 'react'
import noteContext from '../context/noteContext'
import './app.css'

export const About = () => {
  const a=useContext(noteContext)
 
  return (
    <div>
      <div>
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
<div style={{width: 150, height: 200, left: 0, top: 176.32, position: 'absolute', transform: 'rotate(-40.39deg)', transformOrigin: '0 0', background: '#F6A89E', borderRadius: 24, border: '12px #33322E solid'}} />
<div style={{width: 150, height: 200, left: 53.60, top: 84.42, position: 'absolute', transform: 'rotate(-22.72deg)', transformOrigin: '0 0', background: '#8CD4CB', borderRadius: 24, border: '12px #33322E solid'}} />
<div style={{width: 150, height: 200, left: 129.78, top: 16.91, position: 'absolute', transform: 'rotate(-6.47deg)', transformOrigin: '0 0', background: '#F4D799', borderRadius: 24, border: '12px #33322E solid'}} />

    </div>
    <div style={{ position: 'fixed', top: 130, right: 40, width: '20%', height: '18rem', paddingTop: 16, paddingBottom: 16, background: '#F9F3E5', boxShadow: '12px 12px 0px #33322E', borderRadius: 24, border: '4px #33322E solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex',}}>
  <div style={{width: 271.40, height: 45.48, position: 'relative'}}>

     
  </div>

    
  
      <div>
        
      <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 276, height: 296, left: -223, top: 0, position: 'absolute'}}>
        <div style={{width: 276, height: 296, left: 0, top: 0, position: 'absolute', background: '#FFF0EE', boxShadow: '12px 12px 0px #33322E', borderRadius: 24, border: '4px #33322E solid'}} />
        <div style={{width: 271.40, height: 0, left: 2, top: 62, position: 'absolute', background: '#F9F3E5', borderRadius: 36, border: '4px #33322E solid'}}></div>
    </div>
    <div style={{left: -123, top: -499, position: 'absolute', color: '#33322E', fontSize: 30, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 36, wordWrap: 'break-word'}}>Notes</div>
</div>
      </div>
  </div>
  <div style={{width: 248, height: 2, opacity: 0, background: '#F9F3E5'}} />
      <div style={{ marginLeft: '5px' }}>
      <div style={{ marginLeft: '-620px',marginTop:'320px',color: '#33322E', fontSize: 90,fontFamily: 'Roboto', fontWeight: '900'}}>noted</div>
      <div style={{marginLeft: '-299px',marginTop:'-1500px',color: '#33322E', fontSize: 50, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 60, wordWrap: 'break-word'}}>level up your note taking</div>
      <div style={{marginLeft: '-698px',marginTop:'-2066px',color: '#33322E', fontSize: 32, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 38.40, wordWrap: 'break-word'}}>crafted by </div>
      <div style={{marginLeft: '-437px',marginTop:'-1229px',color: '#33322E', fontSize: 32, fontFamily: 'Roboto', fontWeight: '900', lineHeight: 38.40, wordWrap: 'break-word'}}>poorva</div>
      </div>
</div>
    </div>
  )
}
