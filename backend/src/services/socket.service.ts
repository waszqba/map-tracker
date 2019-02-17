import * as socketIO from 'socket.io';
import environment from '../../environment/environment';

class SocketService {
    private readonly socket: socketIO.Server;

    constructor() {
        this.socket = socketIO(environment.DEFAULT_SOCKET_PORT);
    }

    sendChange = (event: string, ...data: any): void => {
        this.socket.emit(event, ...data);
    }
}

export default SocketService;
