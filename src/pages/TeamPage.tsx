
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * TeamPage — redireciona para /about#team
 * A equipe está consolidada na página Sobre Nós.
 */
const TeamPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/about#team", { replace: true });
  }, [navigate]);

  return null;
};

export default TeamPage;
