import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Dropzone from 'react-dropzone';
import pdfImage from '../assets/pdf.png';
import tempPDF from '../assets/temp.pdf';
import videoImage from '../assets/youtube.png';

function Home() {
    const [view, setView] = useState('choose');
    const [pdfFile, setPDFFile] = useState();

    const renderStepOne = () => {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <Jumbotron style={{
                                backgroundColor: 'transparent'
                            }}
                            >
                                <p>
                                    Start transcribing PDF textbooks or videos by uploading the PDF containing scanned textbook pages or entering the URL for the video.
                                </p>
                            </Jumbotron>
                            <Container>
                                <Row>
                                    <Col>
                                        <Dropzone onDrop={acceptedFiles => {
                                            console.debug(acceptedFiles[0]);
                                            setPDFFile(acceptedFiles[0]);
                                        }}
                                        >
                                            {({ getRootProps, getInputProps, isDragActive }) => (
                                                <Card
                                                    {...getRootProps()}
                                                    border={isDragActive ? "primary" : ""}
                                                    style={{
                                                        width: '18rem',
                                                        borderWidth: isDragActive ? '2px' : '1px'
                                                    }}>
                                                    {isDragActive && <Badge variant="primary">Drop here</Badge>}
                                                    <Card.Img
                                                        variant="top"
                                                        src={pdfImage}
                                                        style={{
                                                            maxWidth: '100px',
                                                            alignSelf: 'center',
                                                            margin: '3em'
                                                        }} />
                                                    <Card.Body>
                                                        <Card.Body>
                                                            <Card.Title>Upload a book PDF</Card.Title>
                                        Drag and drop file here or
                                        <Button variant="link">upload from your computer</Button>
                                                            <input {...getInputProps()} />
                                                        </Card.Body>
                                                        <Container>
                                                            <Row >
                                                                <Col />
                                                                <Col>
                                                                    <Button onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setView('editTextbook');
                                                                    }} variant="success">Next</Button>
                                                                </Col>
                                                                <Col />
                                                            </Row>
                                                        </Container>
                                                    </Card.Body>
                                                </Card>
                                            )}
                                        </Dropzone>
                                    </Col>
                                    <Col style={{
                                        textAlign: 'center',
                                        alignSelf: 'center'
                                    }}>
                                        OR
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img
                                                variant="top"
                                                src={videoImage}
                                                style={{
                                                    maxWidth: '100px',
                                                    alignSelf: 'center',
                                                    margin: '3em'
                                                }} />
                                            <Card.Body>
                                                <Card.Title>Use an English video</Card.Title>
                                                <Card.Body>
                                                    <Form.Group controlId="videoURL">
                                                        <Form.Label>Enter video file URL</Form.Label>
                                                        <Form.Control type="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
                                                    </Form.Group>
                                                </Card.Body>
                                                <Container>
                                                    <Row >
                                                        <Col />
                                                        <Col>
                                                            <Button onClick={(e) => {
                                                                e.stopPropagation();
                                                                setView('editVideo');
                                                            }} variant="success">Next</Button>
                                                        </Col>
                                                        <Col />
                                                    </Row>
                                                </Container>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

    const renderTextbookEditor = () => {

        return (<>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100vw',
                height: '100%'
            }}>
                <div style={{
                    flexGrow: '1'
                }}>
                    <embed src={tempPDF} width="100%" height="100%" />
                </div>
                <div style={{
                    flexGrow: '1'
                }}>
                    <textarea
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '2em'
                        }}
                        value={`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate, leo in pretium lobortis, enim tortor maximus odio, in finibus velit nunc et enim. Curabitur laoreet erat quis ultrices vehicula. Nunc enim purus, mattis sed posuere id, tempus quis ipsum. Quisque at elit in felis feugiat iaculis. Nulla vehicula nec orci eu feugiat. Proin vel ornare diam. Proin imperdiet iaculis purus, ut porttitor tortor finibus vitae. Ut euismod eleifend orci, sit amet hendrerit purus ultrices sed. Donec eu nunc ut est fermentum finibus. Ut quam ipsum, ornare eget mi id, fringilla mattis velit. Aliquam ac ligula risus. In tincidunt tellus in convallis consectetur. Ut tincidunt ante pulvinar erat condimentum elementum. Proin non vehicula ante.

Donec elementum vehicula leo, id elementum mauris blandit vel. Ut scelerisque ut dolor quis auctor. Donec ultrices, mi ac pellentesque tincidunt, libero mi molestie ante, vel interdum mauris neque vel nisi. Vestibulum at tincidunt ex. Aenean pharetra pretium posuere. Duis fermentum arcu magna, nec pulvinar enim blandit consectetur. Praesent cursus aliquet ligula ut congue. Nullam nec diam ac ligula malesuada condimentum. Proin aliquam varius eleifend.

Integer id ullamcorper urna, efficitur gravida nulla. Aenean vel dictum libero. Aenean non consequat sem. Nullam vestibulum metus urna, dignissim ornare mi condimentum vitae. Suspendisse in maximus dui. Vestibulum nulla leo, pharetra a ante vitae, sodales pellentesque dolor. Nullam lacinia tellus sodales eros bibendum ornare. Curabitur eu dolor aliquet, tincidunt ipsum at, eleifend velit. Fusce at ante vitae tortor fringilla mattis eu nec leo. Mauris a sem eu nunc varius convallis fermentum ac nunc. Fusce neque lacus, varius ut auctor a, pellentesque at lacus. Praesent eleifend condimentum turpis, ut imperdiet tortor auctor nec. 
                        `}
                    ></textarea>
                </div>
            </div>
        </>);
    }

    const renderVideoTranscriptEditor = () => {
        return (<>
            renderVideoTranscriptEditor
        </>);
    }

    const renderEditor = () => {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={{ span: 12, offset: 0 }}>
                            <div style={{
                                backgroundColor: 'transparent',
                                padding: '1rem'
                            }}
                            >
                                <h1 style={{
                                    textAlign: 'center'
                                }}>
                                    {view === 'editTextbook' ? 'Edit textbook content' : 'Edit video transcript and translation'}
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {view === 'editTextbook' ? renderTextbookEditor() : renderVideoTranscriptEditor()}
                <Container style={{
                    padding: '1em 0'
                    // position: 'fixed',
                    // bottom: '9px',
                    // minWidth: '100vw'
                }} >
                    <Row>
                        <Col></Col>
                        <Col>
                            <ButtonGroup aria-label="Basic example" style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Button variant="outline-primary" onClick={(e) => {
                                    setView('choose');
                                }}>Previous</Button>
                                <Button variant="outline-primary">Next</Button>
                            </ButtonGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        );
    }

    return (
        <>
            {view === 'choose' && renderStepOne()}
            {(view === 'editTextbook' || view === 'editVideo') && renderEditor()}
        </>
    )
}

export default Home;
