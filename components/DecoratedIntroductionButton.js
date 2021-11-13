import { Link, Button } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
export default function IntroductionButton({socialLink, Icon, IconName}){
    const isLargerThan800 = useMediaQuery(800)
    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }
    return (
        <Link href={socialLink} isExternal>
            <Button
                leftIcon={<Icon color="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick(`introduction_${String(IconName).toLowerCase()}`)}
            >
                {IconName}
            </Button>
        </Link>
    )
}