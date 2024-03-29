import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/items">
        <Translate contentKey="global.menu.entities.items" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/treatement">
        <Translate contentKey="global.menu.entities.treatement" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/appointment">
        <Translate contentKey="global.menu.entities.appointment" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
