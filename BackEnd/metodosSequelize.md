# Guía de Uso de Sequelize

## Métodos Comunes de Sequelize para Interacción con la Base de Datos

### 1. `findAll`

- **Descripción:** Recupera todas las instancias que coinciden con los criterios de búsqueda.
- **Parámetros:** Un objeto de opciones que puede incluir:
  - `where`: Condiciones de filtrado.
  - `attributes`: Columnas a seleccionar.
  - `include`: Joins y asociaciones.
- **Consultas Complejas:** Sí, se puede usar el parámetro `include` para realizar joins.
- **Retorno:** Devuelve una promesa que se resuelve en un array de instancias de modelo (Model) que cumplen con los criterios especificados. Si no hay registros que coincidan, se devuelve un array vacío.
- **En caso de fallo:** Lanza una excepción (error) si ocurre algún problema, como problemas de conexión o errores en la consulta.
- **En caso de no encontrar nada:** Devuelve un array vacío ([]).

  ```javascript
  const users = await User.findAll({
  	where: { isActive: true },
  	include: [{ model: Profile, as: 'profile' }],
  });
  ```

### 2. `findOne`

- **Descripción:** Recupera una única instancia que coincida con los criterios de búsqueda.
- **Parámetros:** Similar a `findAll`, con opciones como `where`, `attributes`, `include`.
- **Consultas Complejas:** Sí, soporta joins mediante el parámetro `include`.
- **Retorno:** Devuelve una promesa que se resuelve en una instancia de modelo (Model) que cumple con los criterios especificados. Si no se encuentra ninguna instancia, se devuelve null.
- **En caso de fallo:** Lanza una excepción si ocurre un error en la consulta o conexión.
- **En caso de no encontrar nada:** Devuelve null.

  ```javascript
  const user = await User.findOne({
  	where: { id: 1 },
  	include: [{ model: Profile, as: 'profile' }],
  });
  ```

### 3. `findByPk`

- **Descripción:** Recupera una instancia por su clave primaria.
- **Parámetros:** La clave primaria del registro.
- **Consultas Complejas:** No, solo busca por clave primaria.
- **Retorno:** Devuelve una promesa que se resuelve en una instancia de modelo (Model) con la clave primaria especificada. Si no se encuentra ninguna instancia, se devuelve null.
- **En caso de fallo:** Lanza una excepción si hay un problema con la consulta o conexión.
- **En caso de no encontrar nada:** Devuelve null.

  ```javascript
  const user = await User.findByPk(1);
  ```

### 4. `create`

- **Descripción:** Crea una nueva instancia en la base de datos.
- **Parámetros:** Un objeto con los datos a guardar.
- **Consultas Complejas:** No, solo inserta datos.
- **Retorno:** Devuelve una promesa que se resuelve en una instancia de modelo (Model) que representa el nuevo registro creado.
- **En caso de fallo:** Devuelve null.

  ```javascript
  const newUser = await User.create({ name: 'John Doe', isActive: true });
  ```

### 5. `update`

- **Descripción:** Actualiza una o más instancias que coinciden con los criterios de búsqueda.
- **Parámetros:** Un objeto con los campos a actualizar y un objeto `where` para definir qué registros actualizar.
- **Consultas Complejas:** No, solo actualiza datos.
- **Retorno:** Devuelve una promesa que se resuelve en un array con dos elementos:
  - Número de registros afectados: Un número entero que indica cuántos registros fueron actualizados.
- **En caso de fallo:** Lanza una excepción si ocurre un problema durante la actualización, como errores de conexión o problemas con la consulta.
- **En caso de no encontrar nada:** Devuelve un array con el primer elemento siendo el número de registros afectados. Si ningún registro coincide con los criterios, el número de registros afectados será 0.

```javascript
await User.update({ isActive: false }, { where: { id: 1 } });
```

### 6. `destroy`

- **Descripción:** Elimina una o más instancias que coinciden con los criterios de búsqueda.
- **Parámetros:** Un objeto `where` para definir qué registros eliminar.
- **Consultas Complejas:** No, solo elimina datos.
- **Retorno:** Devuelve una promesa que se resuelve en un número entero que indica cuántos registros fueron eliminados.
- **En caso de fallo:** Lanza una excepción si hay un problema durante la eliminación, como errores de conexión o problemas con la consulta.
- **En caso de no encontrar nada:** Devuelve el número de registros eliminados. Si ningún registro coincide con los criterios, el número de registros eliminados será 0.

  ```javascript
  await User.destroy({ where: { id: 1 } });
  ```

### 7. `count`

- **Descripción:** Cuenta el número de registros que coinciden con los criterios de búsqueda.
- **Parámetros:** Un objeto con opciones como `where` para filtrar los registros.
- **Consultas Complejas:** Sí, permite contar con condiciones y joins.
- **Retorno:** Devuelve una promesa que se resuelve en un número entero que indica cuántos registros coinciden con los criterios de búsqueda.
- **En caso de fallo:** Lanza una excepción si ocurre un problema con la consulta o conexión.
- **En caso de no encontrar nada:** Devuelve 0, indicando que no hay registros que coincidan con los criterios.

  ```javascript
  const userCount = await User.count({ where: { isActive: true } });
  ```

### 8. `aggregate`

- **Descripción:** Realiza funciones de agregación como `SUM`, `COUNT`, `AVG`, etc.
- **Parámetros:**
  - **Campo de Agregación:** El nombre del campo sobre el cual se aplicará la función de agregación.
  - **Función de Agregación:** La función de agregación a aplicar (e.g., `COUNT`, `SUM`, `AVG`).
  - **Opciones:** Un objeto con condiciones, agrupamientos, y otras configuraciones.
- **Consultas Complejas:** Sí, permite realizar agregaciones con filtros.
- **Retorno:** Devuelve una promesa que se resuelve en el resultado de la función de agregación. El resultado depende de la función de agregación utilizada (e.g., un número en el caso de COUNT o SUM).
- **En caso de fallo:** Lanza una excepción si ocurre un problema con la consulta de agregación.
- **En caso de no encontrar nada:** Devuelve el resultado de la función de agregación, que puede ser null o 0 dependiendo de la función utilizada (e.g., COUNT devuelve 0 si no hay registros).

  ```javascript
  const totalUsers = await User.aggregate('age', 'AVG', {
  	where: { isActive: true },
  });
  ```

### 9. `query`

- **Descripción:** Ejecuta una consulta SQL cruda.
- **Parámetros:** La consulta SQL y un objeto con opciones.
- **Consultas Complejas:** Sí, permite ejecutar cualquier tipo de consulta SQL, incluyendo joins complejos.

  ```javascript
  const [results, metadata] = await sequelize.query(
  	'SELECT * FROM users WHERE is_active = true',
  );
  ```

## Uso del Parámetro `include` en Sequelize

### ¿Qué es `include`?

En Sequelize, `include` es una opción que se usa en las consultas (`findAll`, `findOne`, etc.) para incluir datos de modelos asociados, facilitando la ejecución de joins entre tablas relacionadas.

### Tipos de Asociaciones y Cómo Usar `include`

#### 1. Asociaciones Uno a Uno (One-to-One)

- **Ejemplo:** Un `User` tiene un `Profile`, y cada `Profile` pertenece a un solo `User`.

- **Definición en los Modelos:**

  ```javascript
  User.hasOne(Profile);
  Profile.belongsTo(User);
  ```

- **Uso de `include`:**

  ```javascript
  const users = await User.findAll({
  	where: { isActive: true },
  	include: [{ model: Profile, as: 'profile' }],
  });
  ```

- **Descripción:** Aquí, `Profile` se incluye en los resultados de la consulta de `User`. La opción `as` debe coincidir con el alias utilizado en la definición de la asociación.

#### 2. Asociaciones Uno a Muchos (One-to-Many)

- **Ejemplo:** Un `User` puede tener múltiples `Posts`, y cada `Post` pertenece a un solo `User`.

- **Definición en los Modelos:**

  ```javascript
  User.hasMany(Post);
  Post.belongsTo(User);
  ```

- **Uso de `include`:**

  ```javascript
  const users = await User.findAll({
  	include: [{ model: Post, as: 'posts' }],
  });
  ```

- **Descripción:** Aquí, `Post` se incluye en los resultados de la consulta de `User`. Cada `User` en los resultados tendrá un campo `posts` con los posts asociados.

#### 3. Asociaciones Muchos a Muchos (Many-to-Many)

- **Ejemplo:** Los `Users` pueden tener muchos `Groups`, y los `Groups` pueden tener muchos `Users`.

- **Definición en los Modelos:**

  ```javascript
  User.belongsToMany(Group, { through: 'UserGroups' });
  Group.belongsToMany(User, { through: 'UserGroups' });
  ```

- **Uso de `include`:**

  ```javascript
  const users = await User.findAll({
  	include: [{ model: Group, as: 'groups' }],
  });
  ```

- **Descripción:** Aquí, `Group` se incluye en los resultados de la consulta de `User`. Cada `User` en los resultados tendrá un campo `groups` con los grupos asociados.

### Parámetros de `include`

El parámetro `include` acepta un array de objetos que definen las asociaciones a incluir. Cada objeto puede tener varios parámetros:

- **`model`**: El modelo a incluir en la consulta.
- **`as`**: El alias para la asociación (debe coincidir con el alias definido en la asociación).
- **`attributes`**: Define qué atributos del modelo asociado incluir en el resultado.
- **`required`**: Si se establece en `true`, la consulta se comportará como un `INNER JOIN` (solo incluye registros que tienen datos en el modelo asociado). Si se establece en `false` o se omite, se comportará como un `LEFT JOIN` (incluye todos los registros del modelo principal, incluso si no tienen datos en el modelo asociado).

### Ejemplos Prácticos

**Ejemplo 1: Consulta con `include` y alias**

```javascript
const users = await User.findAll({
	include: [
		{
			model: Profile,
			as: 'profile',
			attributes: ['bio', 'website'], // Solo incluye estos atributos del modelo Profile
		},
	],
});
```

## Ejemplo 2: Consulta con `include` y `required`

```typescript
const users = await User.findAll({
	include: [
		{
			model: Post,
			as: 'posts',
			required: true, // Solo incluye usuarios que tienen posts
		},
	],
});
```

### Descripción

En este ejemplo, la opción `required: true` hace que la consulta se comporte como un INNER JOIN. Esto significa que solo se devolverán los usuarios (`User`) que tienen al menos un post (`Post`). Los usuarios sin posts no serán incluidos en los resultados.

# Ejemplo 3: Consulta con include en una relación muchos a muchos

```javascript
const users = await User.findAll({
	include: [
		{
			model: Group,
			as: 'groups',
		},
	],
});
```

Resumen
La consulta realiza lo siguiente:

Recupera todos los usuarios de la base de datos.
Incluye información relacionada de los grupos (Group) asociados a cada usuario.

## Uso del Método `aggregate` en Sequelize

### ¿Qué es el Método `aggregate`?

El método `aggregate` en Sequelize se utiliza para realizar operaciones de agregación sobre un campo específico de una tabla. Las funciones de agregación más comunes incluyen `COUNT`, `SUM`, `AVG`, `MIN`, y `MAX`. Este método es útil para obtener valores calculados a partir de los datos almacenados en la base de datos.

### Parámetros del Método `aggregate`

El método `aggregate` acepta los siguientes parámetros:

- **Campo de Agregación:** El nombre del campo sobre el cual se aplicará la función de agregación.
- **Función de Agregación:** La función de agregación a aplicar, como `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.
- **Opciones:** Un objeto con condiciones adicionales, como filtros (`where`), agrupamientos (`group`), y otros parámetros relevantes.

### Ejemplo de Uso del Método `aggregate`

Supongamos que tenemos un modelo `User` con un campo `age`, y queremos calcular el promedio de edad de todos los usuarios activos. Aquí está cómo se haría:

```javascript
const totalUsers = await User.aggregate('age', 'AVG', {
	where: { isActive: true },
});
```

# Descripción del Ejemplo

## Campo de Agregación: 'age'

Este es el campo sobre el cual queremos calcular la función de agregación. En este caso, estamos interesados en el promedio de la edad (`age`).

## Función de Agregación: 'AVG'

La función de agregación que estamos aplicando es `AVG` (promedio). Sequelize también soporta otras funciones de agregación como `COUNT`, `SUM`, `MIN`, `MAX`.

## Opciones: `{ where: { isActive: true } }`

Este objeto contiene condiciones adicionales para filtrar los registros antes de aplicar la función de agregación. En este caso, estamos filtrando para incluir solo aquellos usuarios que están activos (`isActive: true`).

## Resultado

`totalUsers` contendrá el valor promedio de la columna `age` para todos los usuarios que están activos. La consulta filtra los usuarios activos antes de calcular el promedio.

## Consideraciones Adicionales

- **Funciones de Agregación Disponibles:** Sequelize soporta varias funciones de agregación, incluyendo `COUNT`, `SUM`, `AVG`, `MIN`, y `MAX`. La función de agregación a utilizar debe ser una de estas opciones.
- **Filtros y Condiciones:** Puedes utilizar el parámetro `options` para incluir condiciones (`where`) y otros filtros, lo cual permite realizar cálculos basados en subgrupos específicos de datos.
- **Compatibilidad con Sequelize:** Asegúrate de que tu versión de Sequelize soporte el método `aggregate` y las funciones de agregación que necesitas. Algunas versiones pueden tener ligeras diferencias en la implementación.

Este método es muy poderoso para realizar cálculos y obtener información agregada directamente desde la base de datos, minimizando la cantidad de procesamiento que necesita hacerse en el lado del servidor.
