db.createCollection('local', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'local',
      required: ['local_id'],
      properties: {
        local_id: { bsonType: 'objectId' },
        direcion: {
          bsonType: 'object',
          title: 'direccion',
          properties: {
            direccion: { bsonType: 'string' },
            codigo_postal: { bsonType: 'string' },
            localidad: { bsonType: 'string' },
            provincia: { bsonType: 'string' },
          },
        },
      },
    },
  },
});
db.createCollection('empleado', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'empleado',
      required: ['empleado_id', 'local'],
      properties: {
        empleado_id: { bsonType: 'objectId' },
        datos_persona: {
          bsonType: 'object',
          title: 'datos_persona',
          properties: {
            nombre: { bsonType: 'string' },
            apellidos: { bsonType: 'string' },
            telefono: { bsonType: 'string' },
          },
        },
        nif: { bsonType: 'string' },
        funcion_empleado: {
          bsonType: 'object',
          title: 'funcion_empleado',
          properties: {
            repartidor: { bsonType: 'bool' },
            cocinero: { bsonType: 'bool' },
          },
        },
        local: { bsonType: 'objectId' },
      },
    },
  },
});
db.createCollection('producto', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'producto',
      required: ['producto_id'],
      properties: {
        producto_id: { bsonType: 'objectId' },
        categoria: {
          bsonType: 'object',
          title: 'categoria',
          properties: {
            pizza: { bsonType: 'bool' },
            nombre: { bsonType: 'string' },
          },
        },
        datos_producto: {
          bsonType: 'object',
          title: 'datos_producto',
          properties: {
            nombre: { bsonType: 'string' },
            descripcion: { bsonType: 'string' },
            imagen: { bsonType: 'string' },
            precio: { bsonType: 'double' },
          },
        },
      },
    },
  },
});
db.createCollection('pedido', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'pedido',
      required: ['pedido_id', 'producto', 'cliente', 'local'],
      properties: {
        pedido_id: { bsonType: 'objectId' },
        fecha_hora: { bsonType: 'timestamp' },
        cantidad: { bsonType: 'double' },
        precio_final: { bsonType: 'double' },
        producto: { bsonType: 'objectId' },
        cliente: { bsonType: 'objectId' },
        local: { bsonType: 'objectId' },
      },
    },
  },
});
db.createCollection('cliente', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'cliente',
      required: ['cliente_id'],
      properties: {
        cliente_id: { bsonType: 'objectId' },
        datos_persona: {
          bsonType: 'object',
          title: 'datos_persona',
          properties: {
            nombre: { bsonType: 'string' },
            apellidos: { bsonType: 'string' },
            telefono: { bsonType: 'string' },
          },
        },
        direccion: {
          bsonType: 'object',
          title: 'direccion',
          properties: {
            direccion: { bsonType: 'string' },
            codigo_postal: { bsonType: 'string' },
            localidad: { bsonType: 'string' },
            provincia: { bsonType: 'string' },
          },
        },
      },
    },
  },
});

/* Reference 'cliente_pedido' */
/* Reference 'local_empleado' */
/* Reference 'local_pedido' */
/* Reference 'producto_pedido' */
