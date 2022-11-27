export default function ProvideAnimeSuggestionPage(){
    const PROVIDE_TRANSLATION_SUGGESTION = gql`
muttation CreateTranslationProposal($anime_id: UUID!, $proposition: String!, $language: Languages!){
    createTranslationProposal(input: {
        animeId: $anime_id,
        proposition: $proposition,
        language: $language
    }) {
        isSucces
    }
  }
`;

function provideTranslationSuggestion(mutateFunction){
    const [mutateFunction, { data, loading, error }] = useMutation(PROVIDE_TRANSLATION_SUGGESTION);
    if (loading) return <Image src="https://media.tenor.com/Gv1cMkqev0wAAAAM/anime-confused.gif"></Image>;
    if (error) return `Submission error! ${error.message}`;

    return(
        <Button>
            
        </Button>
    )

    
    return({
        
    })
}