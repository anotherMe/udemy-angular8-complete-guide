export class ServersService {

  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {

    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );

    return server;
  }

  updateServer(myServer: {id: number, name: string, status: string}) {

    const server = this.servers.find(
      (s) => {
        return s.id === myServer.id;
      }
    );

    if (server) {
      server.id = myServer.id;
      server.name = myServer.name;
      server.status = myServer.status;
    }
  }
}
