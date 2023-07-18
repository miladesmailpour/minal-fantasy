import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const BATTLE_QUERY = gql`
  query GetBattleData($gameId: ID!) {
    game(id: $gameId) {
      character {
        name
        class {
          name
          lvl
          hp
          mp
          str
          int
          def
          mdef
          agi
          sprite
        }
      }
    }
  }
`;

const BattleAPI = ({ gameId, onBattleDataFetched }) => {
    const { loading, error, data } = useQuery(BATTLE_QUERY, {
      variables: { gameId },
    });

    useEffect(() => {
        if (!loading && !error && data) {
          onBattleDataFetched(data.game);
        }
      }, [loading, error, data, onBattleDataFetched]);
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error fetching battle data</div>;
    
      return null;
    };
    
    export default BattleAPI;