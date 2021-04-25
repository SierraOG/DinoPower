import React from "react";
import { Button, Modal, Icon } from 'semantic-ui-react'

const Controls = () => {
    return (
        <Modal trigger={<Button>Controls</Button>}>
        <Modal.Header>Controls</Modal.Header>
        <Modal.Content>
          <Modal.Description style={{fontSize: '1.5rem'}}>
            <p><b>[<Icon name='angle up' />]</b> jump</p>
            <p><b>[<Icon name='angle down' />]</b> duck</p>
            <p><b>[<Icon name='angle right' />]</b> speed up</p>
            <p><b>[<Icon name='angle left' />]</b> slow down</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
}

export default Controls