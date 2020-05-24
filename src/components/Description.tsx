import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'
import { ClockCircleOutlined } from '@ant-design/icons'
import { IconText } from './Post'

interface Props {
  description: string,
  category: { title: string, id: number }[],
  createdDate: Date
}

const Text = styled.p`
  font-size: 15px;
`

const LinksContainer = styled.div`
  display: flex;
`

export const Description = (props: Props) => (
  <div>
    <IconText icon={ClockCircleOutlined} text={moment(props.createdDate).format('DD.MM.YYYY HH:mm')} />
    <LinksContainer>
    {props.category.map((c, idx) => (
      <React.Fragment key={c.id}>
        <Link to={`/cat/${c.id}`}>{c.title}</Link>
        {idx !== props.category.length - 1 && <span>,&nbsp;</span>}
      </React.Fragment>
    ))}
    </LinksContainer>
    <Text>{props.description}</Text>
  </div>
)
