import React from 'react';

import IdeaCard from '$components/IdeaCard';
import { IdeaList } from './ListScreen.styles';

// eslint-disable-next-line react/prefer-stateless-function
class ListScreen extends React.Component {
  render() {
    return (
      <IdeaList>
        <IdeaCard
          title="El amor"
          description="Estudiar amor de Dios"
          date="1/1/2019"
          color="red"
        />
        <IdeaCard
          title="La familia"
          description="Estudiar amor de Dios"
          date="1/1/2019"
          color="green"
        />
      </IdeaList>
    );
  }
}

export default ListScreen;
