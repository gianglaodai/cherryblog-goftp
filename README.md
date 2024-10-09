# cherryblog-goftp

To install FE dependencies:

```bash
bun install
```

To install BE dependencies:

```bash
go mod tidy
```

To install FE/BE dependencies:

```bash
bun install && go mod tidy
```

To build FE code:

```bash
bun run build
```

To build BE code:

```bash
go build -o ./tmp/main .
```

To develop FE:

```bash
bun run watch
```

To develop BE:

```bash
air
```

To run:

```bash
bun run build && go build -o ./tmp/main . && ./tmp/main
```
