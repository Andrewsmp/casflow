import logoImg from '../../assets/logo1.svg'
import totalImg from '../../assets/total.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <div className="logo">
                    <div>
                        <img className="logo-back" src={logoImg} />
                        <img className="logo-front" src={totalImg} />
                    </div>
                    <span>Cash Flow</span>
                </div>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}