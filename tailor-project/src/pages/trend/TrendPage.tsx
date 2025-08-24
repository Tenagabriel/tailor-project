import { useSearchParams } from "react-router";
import Headers from "../../components/Headers";
import outfitIllustrations from "../../utils/illustration-images";
import "./trend.css";

function TrendPage() {
  const [searchParams] = useSearchParams();
  const searched = searchParams.get("search");

  const filteredIllustrations = searched
    ? outfitIllustrations.filter((illustration) =>
        illustration.Type.toLowerCase().includes(searched)
      )
    : outfitIllustrations;

  return (
    <> 
      <Headers />

      <div className="illustration-grid">
        <div className="illustration-container">
             {filteredIllustrations.length > 0 ? (
            filteredIllustrations.map((illustration, index) => (
              <img
                key={index} 
                className="trend-images"
                src={illustration.image}
                alt={illustration.Type || 'Illustration'}
              />
            ))
          ) : 
            <p>No items match your search.</p> 
          }

        </div>
      </div>
    </>
  );
}

export default TrendPage;
