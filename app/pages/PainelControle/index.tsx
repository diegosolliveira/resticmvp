import { CardTitle } from "../../components/CardTitle";
import { Sidebar } from "../../components/Menu"
import { StaticCard } from "../../components/StaticCard";
import { CardUser } from "../../components/CardUser";
import { FiUsers, FiShoppingCart, FiDollarSign, FiPackage  } from "react-icons/fi";
import "./styles.css";

export function PainelControle() {
    return (
        <div className="container-pcontrole">
            <Sidebar></Sidebar>

            <div className="container-dashboard">

                <CardTitle name="Painel de Controle"></CardTitle>

                <div className="dashboard">

                    <div className="dashboard-card1">
                        <h1 className="dashboard-title">Bem-vindo, Administrador</h1>
                        <span className="dashboard-description">Veja abaixo as estatísticas do sistema</span>
                    </div>

                    <div className="dashboard-card2">
                        <StaticCard name="Usuários Totais" subtitle="243" description="+17% em relação ao mês passado"><FiUsers style={{ marginRight: "10px" }}/></StaticCard>

                        <StaticCard name="Vendas" subtitle="452" description="+9% em relação ao mês passado"><FiShoppingCart style={{ marginRight: "10px" }}/></StaticCard>

                        <StaticCard name="Receita" subtitle="R$ 54.249" description="+16% em relação ao mês passado"><FiDollarSign  style={{ marginRight: "10px" }}/></StaticCard>

                        <StaticCard name="Produtos" subtitle="R$ 54.249" description="+1% em relação ao mês passado"><FiPackage   style={{ marginRight: "10px" }}/></StaticCard>
                    </div>

                    <div className="dashboard-card3">
                        <h1 className="dashboard-card3-h1">Atividades Recentes</h1>
                        
                        <CardUser name="João Silva" description="Registrou-se no sistema" time="5 min"></CardUser>

                        <CardUser name="Maria Oliveira" description="Enviou um novo produto" time="10 min"></CardUser>

                        <CardUser name="Guilherme Silva" description="Fez um novo pedido" time="1 hora"></CardUser>

                        <CardUser name="Eduardo Junior" description="Fez um novo pedido" time="2 horas"></CardUser>

                        <CardUser name="Marcus Junior" description="Fez um novo pedido" time="3 horas"></CardUser>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}