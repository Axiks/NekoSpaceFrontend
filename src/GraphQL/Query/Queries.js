import { useQuery, gql } from '@apollo/client';

export const GET_ANIMES_LIST = gql`
    query {
        anime(first: 50) {
            totalCount,
            edges {
                cursor,
                node {
                    id,
                    titles{
                            body,
                            language,
                            isMain
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
    }
`;

export const GET_ANIMES_LIST_PACKET_LOAD = gql`
    query Anime( $before: String){
        anime( before: $before){
            totalCount,
            edges {
                cursor,
                node {
                    id,
                    titles{
                            body,
                            language,
                            isMain
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
    }
`;