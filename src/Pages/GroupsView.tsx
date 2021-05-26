
import { Card, Button } from 'react-bootstrap';
import React from 'react';

interface GroupOptions {
    name: string;
    description: string;
    numberOfTasks: number;
}

type GroupsViewState = {
    groups: GroupOptions[]
}

type GroupsViewProps = {
    groupsType: string // pozniej enum
}

class GroupsView extends React.Component<GroupsViewProps, GroupsViewState> {

    private linkToExampleOfGroups: string = 'https://gist.githubusercontent.com/ewelinam10/f1c304f6a2c21a311af97f92f2483967/raw/c2573affe9384ca64182388e7b0cf6adeec5666d/gistfile1.txt';

    public state: GroupsViewState = {
        groups: Array() as GroupOptions[]
    }

    constructor(props: GroupsViewProps) {
        super(props);
        fetch(this.linkToExampleOfGroups)
            .then(res => res.json())
            .then((data) => {
                this.setState({ groups: data.groups })
            })
            .catch(console.log)
    }


    render() {
        return (
            <div>
                {
                    this.state.groups.map((group) => {
                        return (

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{group.name}</Card.Title>
                                    <Card.Text>
                                        {group.description}
                            Liczba członków : {group.numberOfTasks}
                                    </Card.Text>
                                    <Button variant="primary">Dołącz do grupy</Button>
                                </Card.Body>
                            </Card>
                        )

                    })
                }
            </div>



        );
    }
}

export default GroupsView;