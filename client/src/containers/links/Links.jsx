import React from 'react'
import './links.css'
import { Button } from '../../components'
import person from '../../assets/person.png';
import personHover from '../../assets/personHover.png';
import headstone from '../../assets/headstone.png';
import headstoneHover from '../../assets/headstoneHover.png';
import infinity from '../../assets/red-infinity.png';
import infinityHover from '../../assets/infinityHover.png';


const Links = () => {

  return (
    <div className="nagadb__links">
      <div className="nagadb__links__buttons">
        <Button title="Veterans" text="Names, locations, and stories - all in one place. Access all the information you need with one click." image={person} imageHover={personHover} id="veterans" />
        <Button title="Cemeteries" text="Complete list of all cemeteries visited by Project Naga®, phone numbers, websites, and maps included." image={headstone} imageHover={headstoneHover} id="cemeteries" />
        <Button title="Project Naga®" text="View our other initiatives and learn more about our mission to honor veterans and their history at projectnaga.org." image={infinity} imageHover={infinityHover} id="naga" />
      </div>
    </div>
  )
}

export default Links