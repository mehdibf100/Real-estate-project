package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);

   // List<User> findByEmail(String email);
    Optional<User> findByEmailOrUsername(String email, String username);
      List<User> findByEmail(String email);

  }


