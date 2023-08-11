import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';

function AWSLogin ( {signOut, user}) {
    return (
        <>
            <center>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
            </center>
        </>
    )
}

export default withAuthenticator(AWSLogin);