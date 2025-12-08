import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Switch,
  Pressable,
  StatusBar,
  Platform,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const SCREEN_W = Dimensions.get("window").width;

export default function App() {
  // splash control
  const [loadingSplash, setLoadingSplash] = useState(true);

  // categories + tasks state (3 secciones: Trabajo, Personal, Estudios)
  const [categories, setCategories] = useState([
    {
      id: "trabajo",
      name: "Trabajo",
      color: "rgba(81,3,144,0.12)", // morado translúcido
      accent: "#510390",
      tasks: [
        {
          id: "t1",
          description: "Enviar reporte mensual al gerente",
          priority: "Alta",
          completed: false,
        },
        {
          id: "t2",
          description: "Revisar correos importantes",
          priority: "Media",
          completed: false,
        },
      ],
    },
    {
      id: "personal",
      name: "Personal",
      color: "rgba(0,150,136,0.12)", // verde translúcido
      accent: "#009688",
      tasks: [
        {
          id: "t3",
          description: "Agendar cita médica",
          priority: "Media",
          completed: false,
        },
        {
          id: "t4",
          description: "Llamar a mamá",
          priority: "Baja",
          completed: false,
        },
      ],
    },
    {
      id: "estudios",
      name: "Estudios",
      color: "rgba(255,152,0,0.12)", // naranja translúcido
      accent: "#FF9800",
      tasks: [
        {
          id: "t5",
          description: "Terminar práctica de React Native",
          priority: "Alta",
          completed: false,
        },
        {
          id: "t6",
          description: "Leer capítulo 4 del libro",
          priority: "Media",
          completed: false,
        },
      ],
    },
  ]);

  // mostrar splash por 2.2s (puedes ajustar)
  useEffect(() => {
    const timer = setTimeout(() => setLoadingSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // helper para formatear fecha actual en español
  const obtenerFechaActual = () => {
    const ahora = new Date();
    return ahora.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // Toggle de tarea
  const toggleTask = (categoryId, taskId) => {
    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id !== categoryId) return cat;
        return {
          ...cat,
          tasks: cat.tasks.map((t) =>
            t.id === taskId ? { ...t, completed: !t.completed } : t
          ),
        };
      })
    );
  };

  // Reiniciar todas las tareas a pendiente (completed = false)
  const reiniciarTareas = () => {
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        tasks: cat.tasks.map((t) => ({ ...t, completed: false })),
      }))
    );
  };

  // Componente para mostrar prioridad con estilo
  const PriorityBadge = ({ priority }) => {
    let bg = "#ddd";
    if (priority === "Alta") bg = "#E53935";
    else if (priority === "Media") bg = "#FB8C00";
    else if (priority === "Baja") bg = "#43A047";

    return (
      <View style={[styles.priorityBadge, { backgroundColor: bg }]}>
        <Text style={styles.priorityText}>{priority}</Text>
      </View>
    );
  };

  // Splash screen
  if (loadingSplash) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <StatusBar barStyle="light-content" />
        <Image
          source={require("./assets/new_splash.jpg")}
          style={styles.splashImage}
          resizeMode="cover"
        />
        <View style={styles.splashOverlay}>
          <Text style={styles.splashPhrase}>Empieza hoy, tu futuro te lo agradecerá.</Text>
          <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />
        </View>
      </SafeAreaView>
    );
  }

  // Main app view
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require("./assets/image.png")}
        style={styles.background}
        imageStyle={{ opacity: 0.12 }}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mis Deberes</Text>
          <Text style={styles.headerDate}>{obtenerFechaActual()}</Text>
        </View>

        {/* ScrollView con secciones */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((cat) => (
            <View key={cat.id} style={[styles.categoryContainer, { backgroundColor: cat.color }]}>
              <View style={styles.categoryHeader}>
                <Text style={[styles.categoryTitle, { color: cat.accent }]}>{cat.name}</Text>
                <View style={[styles.categoryAccent, { backgroundColor: cat.accent }]} />
              </View>

              {/* Tareas */}
              {cat.tasks.map((task) => (
                <View key={task.id} style={styles.taskRow}>
                  <View style={styles.taskLeft}>
                    <Text style={styles.taskDesc}>{task.description}</Text>
                    <View style={styles.taskMeta}>
                      <PriorityBadge priority={task.priority} />
                      <Text style={[styles.statusText, task.completed ? styles.statusDone : styles.statusPending]}>
                        {task.completed ? "completada" : "pendiente"}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.taskRight}>
                    <Switch
                      trackColor={{ false: "#bfbfbf", true: cat.accent }}
                      thumbColor={Platform.OS === "android" ? (task.completed ? "#fff" : "#fff") : undefined}
                      value={task.completed}
                      onValueChange={() => toggleTask(cat.id, task.id)}
                    />
                  </View>
                </View>
              ))}
            </View>
          ))}

          <View style={{ height: 18 }} />

          {/* Reiniciar */}
          <View style={styles.resetWrapper}>
            <Pressable style={styles.resetButton} onPress={reiniciarTareas}>
              <Text style={styles.resetText}>Reiniciar tareas (estados a pendiente)</Text>
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* --- Splash --- */
  splashContainer: {
    flex: 1,
    backgroundColor: "#510390",
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  splashOverlay: {
    position: "absolute",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  splashPhrase: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.18)",
    padding: 12,
    borderRadius: 8,
  },

  /* --- Background & header --- */
  background: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 8 : 18,
  },
  header: {
    marginTop: 4,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#000",
  },
  headerDate: {
    fontSize: 14,
    color: "#444",
    marginTop: 6,
    textTransform: "capitalize",
  },

  /* --- Categories --- */
  scroll: {
    flex: 1,
  },
  categoryContainer: {
    padding: 14,
    borderRadius: 12,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "700",
    flex: 1,
  },
  categoryAccent: {
    width: 12,
    height: 12,
    borderRadius: 4,
    marginLeft: 8,
  },

  /* --- Task row --- */
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
    elevation: 1,
  },
  taskLeft: {
    flex: 1,
    paddingRight: 10,
  },
  taskDesc: {
    fontSize: 16,
    color: "#222",
    fontWeight: "600",
  },
  taskMeta: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 10,
  },
  priorityText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "lowercase",
  },
  statusPending: {
    color: "#f57c00",
  },
  statusDone: {
    color: "#4caf50",
  },
  taskRight: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  /* reset */
  resetWrapper: {
    alignItems: "center",
    marginTop: 6,
    marginBottom: 40,
  },
  resetButton: {
    width: Math.min(SCREEN_W - 48, 520),
    backgroundColor: "#510390",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  resetText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});

