import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {IPublication} from "../../../../interfaces/IPublication";
import {FontSize} from '../../../../styledHelpers/FontSize';
import {Colors} from '../../../../styledHelpers/Colors'

const Wrapper = styled.div`
  display:flex;
  position: relative;
  height: 100%;
  color: ${Colors.white}
`;

const PublicationImage = styled.div`
  height: 100%;
  width:300px;
  position: absolute;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}");
  background-size: cover;
  z-index: 0;
`;

const PublicationContent = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom:30px;
  padding-left: 5px;
`;

const Title = styled.div`
  font-size: ${FontSize[16]};
  padding-bottom: 15px;
`;

const WhoAndWhen = styled.div`
  display: flex;
  font-size: ${FontSize[18]};
  height: fit-content;
`;

const CreationDate = styled.div`
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ProfileImage = styled.img`
  height:20px;
  border-radius: 50%;
  margin-right: 5px;
`;

interface PublicationProps {
    className?: string;
    publication: IPublication
}

const MainPublication: FC<PublicationProps> = (props) => {
  return (
    <Wrapper className={props.className}>
      <div>
          <Link to="#">
              <PublicationImage thumbnailSrc={props.publication?.thumbnailUrl} />
          </Link>
      </div>
      <PublicationContent>
          <Title >
            <Link to="#" style={{color: 'white', textDecoration: 'none'}}>
              {props.publication?.title}
            </Link>
          </Title>

          <WhoAndWhen>

            <CreationDate>
                {props.publication?.creationDate}
            </CreationDate>
            
            <Profile>
                <ProfileImage src={props.publication?.author.photo.thumbnailUrl} />
                {props.publication?.author.name}
            </Profile>

          </WhoAndWhen>
      </PublicationContent>
    </Wrapper>
  );
}

export default MainPublication;
