import { useQuery, gql } from '@apollo/client';

export const GET_ANIMES_LIST = gql`
    query{
        anime {
        totalCount,
        nodes{
            id,
            titles{
            body,
            language
            },
            synopsises{
            body,
            language
            },
            posters{
            poster {
                original
            }
            },
            anotherService {
            myAnimeList
            },
            numEpisodes,
            source,
            episodesDurationSeconds,
            genres{
            genre {
                name
            }
            }
        }
        }
    }
`;